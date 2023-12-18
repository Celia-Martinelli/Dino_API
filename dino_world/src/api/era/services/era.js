'use strict';

/**
 * era service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::era.era');
