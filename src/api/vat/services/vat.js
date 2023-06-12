'use strict';

/**
 * vat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vat.vat');
