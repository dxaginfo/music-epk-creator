import mongoose, { Document, Schema } from 'mongoose';

export interface IPressKit extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  slug: string;
  description?: string;
  template: string;
  isPublic: boolean;
  publishedAt?: Date;
  expiresAt?: Date;
  customDomain?: string;
  analytics: {
    views: number;
    uniqueVisitors: number;
    averageEngagementTime: number;
  };
  customization: {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    layout: any;
  };
}

const PressKitSchema = new Schema<IPressKit>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      trim: true,
    },
    template: {
      type: String,
      required: true,
      ref: 'Template',
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    expiresAt: {
      type: Date,
    },
    customDomain: {
      type: String,
    },
    analytics: {
      views: {
        type: Number,
        default: 0,
      },
      uniqueVisitors: {
        type: Number,
        default: 0,
      },
      averageEngagementTime: {
        type: Number,
        default: 0,
      },
    },
    customization: {
      colors: {
        primary: {
          type: String,
          default: '#6a11cb',
        },
        secondary: {
          type: String,
          default: '#2575fc',
        },
        text: {
          type: String,
          default: '#333333',
        },
        background: {
          type: String,
          default: '#ffffff',
        },
      },
      fonts: {
        heading: {
          type: String,
          default: 'Inter',
        },
        body: {
          type: String,
          default: 'Inter',
        },
      },
      layout: {
        type: Schema.Types.Mixed,
        default: {},
      },
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
PressKitSchema.index({ userId: 1 });
PressKitSchema.index({ slug: 1 }, { unique: true });

export default mongoose.model<IPressKit>('PressKit', PressKitSchema);