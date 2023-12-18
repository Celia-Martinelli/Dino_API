'use strict';

/**
 * walk service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::walk.walk');
