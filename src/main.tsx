import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {AuthProvider} from "./providers/auth";
import ThemeProvider from "./providers/theme/ThemeProvider.tsx";
import {MathJaxContext} from "better-react-mathjax";
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from "./api/queryClient.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <ThemeProvider>
                    <MathJaxContext>
                        <App/>
                    </MathJaxContext>
                </ThemeProvider>
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
