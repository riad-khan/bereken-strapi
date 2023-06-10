'use strict';

/**
 * calculator-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::calculator-list.calculator-list');
