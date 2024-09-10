import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://b1fd8c8b6ef2ed50004f50686c1e80db@o4507884725993472.ingest.de.sentry.io/4507884729401424",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect:React.useEffect
    }),
    Sentry.replayIntegration(),
  ],
  
  tracesSampleRate: 1.0, 
 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
