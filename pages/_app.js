import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtoolsPanel } from "react-query/devtools";
import { useRouter } from "next/router";
import "../styles/globals.css";

//  List pages you want to be publicly accessible, or leave empty if
//  every page requires authentication. Use this naming strategy:
//   "/"              for pages/index.js
//   "/foo"           for pages/foo/index.js
//   "/foo/bar"       for pages/foo/bar.js
//   "/foo/[...bar]"  for pages/foo/[...bar].js
const publicPages = [];

// Initialize react query
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  // Get the pathname
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);

  // If the current route is listed as public, render it directly
  // Otherwise, use Clerk to require authentication
  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        {isPublicPage ? (
          <>
            <Component {...pageProps} />
          </>
        ) : (
          <>
            <SignedIn>
              <Component {...pageProps} />
              {/* <ReactQueryDevtoolsPanel /> */}
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        )}
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default MyApp;
