'use strict';

/**
 * walk controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::walk.walk');
