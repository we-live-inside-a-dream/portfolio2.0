// sentry.server.config.ts

import * as Sentry from "@sentry/nextjs";

// Create a configuration object and use type assertion
const sentryConfig: any = {
  dsn: "https://010a8c9a74f3a2ccbd101629ac856861@o4507451471691776.ingest.us.sentry.io/4507451475689472",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Custom property to disable telemetry
  telemetry: false,
  
  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
};

Sentry.init(sentryConfig);
