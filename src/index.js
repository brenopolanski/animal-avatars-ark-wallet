module.exports = {
  register() {
  },

  getComponentPaths() {
    return {
      'chick': 'components/avatars/chick.js',
      'chicken': 'components/avatars/chicken.js',
      'narwhal': 'components/avatars/narwhal.js',
      'parrot': 'components/avatars/parrot.js',
      'penguin': 'components/avatars/penguin.js',
      'snake': 'components/avatars/snake.js'
    };
  },

  getAvatars() {
    return [
      'chick',
      'chicken',
      'narwhal',
      'parrot',
      'penguin',
      'snake'
    ];
  }
};
