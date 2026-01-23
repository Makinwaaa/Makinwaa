export const currentRoute = (path: any) => {
  if (typeof window !== 'undefined') {
    return window.location.pathname === path;
  }
  return false;
};

export const getRandom = (arr: any[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}