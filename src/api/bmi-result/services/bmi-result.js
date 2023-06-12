'use strict';

/**
 * bmi-result service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bmi-result.bmi-result');
