const getPokemonId = (router) => {
  const breakPoint = router.asPath.lastIndexOf("/");

  return router.asPath.slice(breakPoint + 1, router.asPath.length);
};

export default getPokemonId;
