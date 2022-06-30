'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin('graphql').service('extension');

    const extension = () => ({
      resolvers: {
        Mutation: {
          updatePost: async (_, args, ctx) => {
            const { toEntityResponse} = strapi.plugin('graphql').service('format').returnType;
            const post = await strapi.entityService.findOne('api::post.post', args.id, { populate: { user: true}});

            if (post.user.id !== ctx.state.user.id) {
              throw new Error('You arenot authorized to update this post')
            }

            const updatedPost = await strapi.entityService.update('api::post.post', args.id, args);
            return toEntityResponse(updatedPost);
          }
        }
      }
    });
    extensionService.use(extension);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
