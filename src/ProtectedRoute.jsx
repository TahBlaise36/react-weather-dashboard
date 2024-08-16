function ProtectedRoute({ children }) {
  // 1, Load the authenticated user

  // 2. While loading, show spinner

  // 3. If there is No authenticated user, redirect to login

  // 4. If there is a user, render the app

  return children;
}

export default ProtectedRoute;
