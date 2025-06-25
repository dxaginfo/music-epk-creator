import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  profileImage?: string;
  role: 'artist' | 'manager' | 'admin';
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  plan: 'free' | 'pro' | 'enterprise';
  settings: {
    notifications: boolean;
    emailFrequency: string;
  };
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    profileImage: {
      type: String,
    },
    role: {
      type: String,
      enum: ['artist', 'manager', 'admin'],
      default: 'artist',
    },
    lastLogin: {
      type: Date,
    },
    plan: {
      type: String,
      enum: ['free', 'pro', 'enterprise'],
      default: 'free',
    },
    settings: {
      notifications: {
        type: Boolean,
        default: true,
      },
      emailFrequency: {
        type: String,
        default: 'weekly',
      },
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save middleware to hash password
UserSchema.pre('save', async function (next) {
  const user = this;

  // Only hash the password if it has been modified or is new
  if (!user.isModified('password')) return next();

  try {
    // Generate salt
    const salt = await bcrypt.genSalt(10);

    // Hash password with salt
    const hashedPassword = await bcrypt.hash(user.password, salt);

    // Replace plain text password with hashed password
    user.password = hashedPassword;
    next();
  } catch (error: any) {
    next(error);
  }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

export default mongoose.model<IUser>('User', UserSchema);