'use strict';

/**
 * walk router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::walk.walk');
