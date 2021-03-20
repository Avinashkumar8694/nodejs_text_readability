let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
//append_imports_end
export class readability {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'readability';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new readability(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_readability_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: readability');

    //appendnew_flow_readability_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: readability');

    if (!this.swaggerDocument['paths']['/readability/fleschreadingease']) {
      this.swaggerDocument['paths']['/readability/fleschreadingease'] = {
        post: {
          summary: '',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/readability/fleschreadingease'][
        'post'
      ] = {
        summary: '',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/readability/fleschreadingease`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_b0hbAANT035e7AQA(bh);
          //appendnew_next_sd_TwslbAQbCEG5Iw0B
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TwslbAQbCEG5Iw0B');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/readability/fleschKincaidGrade']) {
      this.swaggerDocument['paths']['/readability/fleschKincaidGrade'] = {
        post: {
          summary: '',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/readability/fleschKincaidGrade'][
        'post'
      ] = {
        summary: '',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/readability/fleschKincaidGrade`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_6IeQjDPNewbJ2Kn6(bh);
          //appendnew_next_sd_rThyAyl14w41nTAj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rThyAyl14w41nTAj');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/readability/colemanLiauIndex']) {
      this.swaggerDocument['paths']['/readability/colemanLiauIndex'] = {
        post: {
          summary: '',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/readability/colemanLiauIndex']['post'] = {
        summary: '',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/readability/colemanLiauIndex`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_HpGg14ULnSXkHOHH(bh);
          //appendnew_next_sd_xEFS4GTDkrHfImSQ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xEFS4GTDkrHfImSQ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (
      !this.swaggerDocument['paths']['/readability/automatedReadabilityIndex']
    ) {
      this.swaggerDocument['paths'][
        '/readability/automatedReadabilityIndex'
      ] = {
        post: {
          summary: '',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/readability/automatedReadabilityIndex'][
        'post'
      ] = {
        summary: '',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/readability/automatedReadabilityIndex`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_pUIltE8eDF8i91Y5(bh);
          //appendnew_next_sd_Fio2yqDGhwgmTmNz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Fio2yqDGhwgmTmNz');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/readability/difficultWords']) {
      this.swaggerDocument['paths']['/readability/difficultWords'] = {
        post: {
          summary: '',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/readability/difficultWords']['post'] = {
        summary: '',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/readability/difficultWords`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_TBEn7CBkDi6R46qq(bh);
          //appendnew_next_sd_4azjeRgj7yHArYsy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4azjeRgj7yHArYsy');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (
      !this.swaggerDocument['paths']['/readability/daleChallReadabilityScore']
    ) {
      this.swaggerDocument['paths'][
        '/readability/daleChallReadabilityScore'
      ] = {
        post: {
          summary: '',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/readability/daleChallReadabilityScore'][
        'post'
      ] = {
        summary: '',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/readability/daleChallReadabilityScore`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_0JxabK1Kfmrpjd78(bh);
          //appendnew_next_sd_aifdTTdXjme4BN56
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aifdTTdXjme4BN56');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/readability/gunningFog']) {
      this.swaggerDocument['paths']['/readability/gunningFog'] = {
        post: {
          summary: '',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/readability/gunningFog']['post'] = {
        summary: '',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/readability/gunningFog`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_rxmjgJSDGJ2hHtnH(bh);
          //appendnew_next_sd_pCFgNoUPf571G6M3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pCFgNoUPf571G6M3');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/readability/textStandard']) {
      this.swaggerDocument['paths']['/readability/textStandard'] = {
        post: {
          summary: '',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/readability/textStandard']['post'] = {
        summary: '',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/readability/textStandard`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_YBpoDQR4KG1Kx4VB(bh);
          //appendnew_next_sd_ys6nFz1gmczpFEjs
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ys6nFz1gmczpFEjs');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/readability/syllableCount']) {
      this.swaggerDocument['paths']['/readability/syllableCount'] = {
        post: {
          summary: '',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/readability/syllableCount']['post'] = {
        summary: '',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/readability/syllableCount`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_Nf7BT3jSY9VAm7tg(bh);
          //appendnew_next_sd_HVvGkFwSPd6U0EHc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HVvGkFwSPd6U0EHc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/readability/lexiconCount']) {
      this.swaggerDocument['paths']['/readability/lexiconCount'] = {
        post: {
          summary: '',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/readability/lexiconCount']['post'] = {
        summary: '',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/readability/lexiconCount`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_geSBbzLD6mqj8Jfz(bh);
          //appendnew_next_sd_akcf2bwlm4b6DQCe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_akcf2bwlm4b6DQCe');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/readability/sentenceCount']) {
      this.swaggerDocument['paths']['/readability/sentenceCount'] = {
        post: {
          summary: '',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/readability/sentenceCount']['post'] = {
        summary: '',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/readability/sentenceCount`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_t6k5SU99wYLzP5Gr(bh);
          //appendnew_next_sd_XWv5sGvUBgh3HTgm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_XWv5sGvUBgh3HTgm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/readability/smogIndex']) {
      this.swaggerDocument['paths']['/readability/smogIndex'] = {
        post: {
          summary: '',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/readability/smogIndex']['post'] = {
        summary: '',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/readability/smogIndex`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_cdhVRC3VXpN464ve(bh);
          //appendnew_next_sd_93lS36JEDkZXfQ0H
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_93lS36JEDkZXfQ0H');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_readability_HttpIn
  }
  //   service flows_readability

  //appendnew_flow_readability_start

  async sd_b0hbAANT035e7AQA(bh) {
    try {
      const rs = require('text-readability');

      let body = bh.input.body;

      if (body && body.text) {
        bh.result = {
          fleschReadingEaseScore: rs.fleschReadingEase(body.text),
        };
        bh.statusCode = 200;
      } else {
        bh.statusCode = 500;
        bh.result = {
          message: 'invalid body',
        };
      }
      await this.sd_PmhiYdcHbhYeWxxv(bh);
      //appendnew_next_sd_b0hbAANT035e7AQA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b0hbAANT035e7AQA');
    }
  }

  async sd_PmhiYdcHbhYeWxxv(bh) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PmhiYdcHbhYeWxxv');
    }
  }

  async sd_6IeQjDPNewbJ2Kn6(bh) {
    try {
      const rs = require('text-readability');

      let body = bh.input.body;

      if (body && body.text) {
        bh.result = {
          fleschKincaidGrade: rs.fleschKincaidGrade(body.text),
        };
        bh.statusCode = 200;
      } else {
        bh.statusCode = 500;
        bh.result = {
          message: 'invalid body',
        };
      }
      await this.sd_PmhiYdcHbhYeWxxv(bh);
      //appendnew_next_sd_6IeQjDPNewbJ2Kn6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6IeQjDPNewbJ2Kn6');
    }
  }

  async sd_HpGg14ULnSXkHOHH(bh) {
    try {
      const rs = require('text-readability');

      let body = bh.input.body;

      if (body && body.text) {
        bh.result = {
          colemanLiauIndexGradelevel: rs.colemanLiauIndex(body.text),
        };
        bh.statusCode = 200;
      } else {
        bh.statusCode = 500;
        bh.result = {
          message: 'invalid body',
        };
      }
      await this.sd_PmhiYdcHbhYeWxxv(bh);
      //appendnew_next_sd_HpGg14ULnSXkHOHH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HpGg14ULnSXkHOHH');
    }
  }

  async sd_pUIltE8eDF8i91Y5(bh) {
    try {
      const rs = require('text-readability');

      let body = bh.input.body;

      if (body && body.text) {
        bh.result = {
          automatedReadabilityIndexGradeLevel: rs.automatedReadabilityIndex(
            body.text
          ),
        };
        bh.statusCode = 200;
      } else {
        bh.statusCode = 500;
        bh.result = {
          message: 'invalid body',
        };
      }
      await this.sd_PmhiYdcHbhYeWxxv(bh);
      //appendnew_next_sd_pUIltE8eDF8i91Y5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pUIltE8eDF8i91Y5');
    }
  }

  async sd_TBEn7CBkDi6R46qq(bh) {
    try {
      const rs = require('text-readability');

      let body = bh.input.body;

      if (body && body.text) {
        bh.result = {
          difficultWords: rs.difficultWords(body.text),
        };
        bh.statusCode = 200;
      } else {
        bh.statusCode = 500;
        bh.result = {
          message: 'invalid body',
        };
      }
      await this.sd_PmhiYdcHbhYeWxxv(bh);
      //appendnew_next_sd_TBEn7CBkDi6R46qq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TBEn7CBkDi6R46qq');
    }
  }

  async sd_0JxabK1Kfmrpjd78(bh) {
    try {
      const rs = require('text-readability');

      let body = bh.input.body;

      if (body && body.text) {
        bh.result = {
          daleChallReadabilityScore: rs.daleChallReadabilityScore(body.text),
        };
        bh.statusCode = 200;
      } else {
        bh.statusCode = 500;
        bh.result = {
          message: 'invalid body',
        };
      }
      await this.sd_PmhiYdcHbhYeWxxv(bh);
      //appendnew_next_sd_0JxabK1Kfmrpjd78
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0JxabK1Kfmrpjd78');
    }
  }

  async sd_rxmjgJSDGJ2hHtnH(bh) {
    try {
      const rs = require('text-readability');

      let body = bh.input.body;

      if (body && body.text) {
        bh.result = {
          FOGIndex: rs.gunningFog(body.text),
        };
        bh.statusCode = 200;
      } else {
        bh.statusCode = 500;
        bh.result = {
          message: 'invalid body',
        };
      }
      await this.sd_PmhiYdcHbhYeWxxv(bh);
      //appendnew_next_sd_rxmjgJSDGJ2hHtnH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rxmjgJSDGJ2hHtnH');
    }
  }

  async sd_YBpoDQR4KG1Kx4VB(bh) {
    try {
      const rs = require('text-readability');

      let body = bh.input.body;

      if (body && body.text) {
        bh.result = {
          textStandard: rs.textStandard(body.text),
        };
        bh.statusCode = 200;
      } else {
        bh.statusCode = 500;
        bh.result = {
          message: 'invalid body',
        };
      }
      await this.sd_PmhiYdcHbhYeWxxv(bh);
      //appendnew_next_sd_YBpoDQR4KG1Kx4VB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YBpoDQR4KG1Kx4VB');
    }
  }

  async sd_Nf7BT3jSY9VAm7tg(bh) {
    try {
      const rs = require('text-readability');

      let body = bh.input.body;

      if (body && body.text) {
        bh.result = {
          syllableCount: rs.syllableCount(body.text),
        };
        bh.statusCode = 200;
      } else {
        bh.statusCode = 500;
        bh.result = {
          message: 'invalid body',
        };
      }
      await this.sd_PmhiYdcHbhYeWxxv(bh);
      //appendnew_next_sd_Nf7BT3jSY9VAm7tg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Nf7BT3jSY9VAm7tg');
    }
  }

  async sd_geSBbzLD6mqj8Jfz(bh) {
    try {
      const rs = require('text-readability');

      let body = bh.input.body;

      if (body && body.text) {
        bh.result = {
          lexiconCount: rs.lexiconCount(body.text),
        };
        bh.statusCode = 200;
      } else {
        bh.statusCode = 500;
        bh.result = {
          message: 'invalid body',
        };
      }
      await this.sd_PmhiYdcHbhYeWxxv(bh);
      //appendnew_next_sd_geSBbzLD6mqj8Jfz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_geSBbzLD6mqj8Jfz');
    }
  }

  async sd_t6k5SU99wYLzP5Gr(bh) {
    try {
      const rs = require('text-readability');

      let body = bh.input.body;

      if (body && body.text) {
        bh.result = {
          sentenceCount: rs.sentenceCount(body.text),
        };
        bh.statusCode = 200;
      } else {
        bh.statusCode = 500;
        bh.result = {
          message: 'invalid body',
        };
      }
      await this.sd_PmhiYdcHbhYeWxxv(bh);
      //appendnew_next_sd_t6k5SU99wYLzP5Gr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t6k5SU99wYLzP5Gr');
    }
  }

  async sd_cdhVRC3VXpN464ve(bh) {
    try {
      const rs = require('text-readability');

      let body = bh.input.body;

      if (body && body.text) {
        bh.result = {
          smogIndex: rs.smogIndex(body.text),
        };
        bh.statusCode = 200;
      } else {
        bh.statusCode = 500;
        bh.result = {
          message: 'invalid body',
        };
      }
      await this.sd_PmhiYdcHbhYeWxxv(bh);
      //appendnew_next_sd_cdhVRC3VXpN464ve
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cdhVRC3VXpN464ve');
    }
  }

  async sd_eQ6gkY6tQ9WF5ajN(bh) {
    try {
      bh.web.res.status(500).send(bh.error.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eQ6gkY6tQ9WF5ajN');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_1hSDuczamwaLa9YV(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_1hSDuczamwaLa9YV(bh) {
    const catchConnectedNodes = ['sd_eQ6gkY6tQ9WF5ajN'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    await this.sd_eQ6gkY6tQ9WF5ajN(bh);
    //appendnew_next_sd_1hSDuczamwaLa9YV
    return true;
  }
  //appendnew_flow_readability_Catch
}
