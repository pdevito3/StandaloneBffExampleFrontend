import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthUser } from "./apis/auth";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

function Main() {
  const { isLoggedIn, username, logoutUrl } = useAuthUser();
  return (
    <div className="p-20">
      {!isLoggedIn ? (
        <a
          href="/bff/login?returnUrl=/"
          className="inline-block px-4 py-2 text-base font-medium text-center text-white bg-blue-500 border border-transparent rounded-md hover:bg-opacity-75"
        >
          Login
        </a>
      ) : (
        <div className="flex-shrink-0 block">
          <div className="flex items-center">
            <div className="ml-3">
              <p className="block text-base font-medium text-blue-500 md:text-sm">{`Hi, ${username}!`}</p>
              <a
                href={logoutUrl?.value}
                className="block mt-1 text-sm font-medium text-blue-200 hover:text-blue-500 md:text-xs"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
