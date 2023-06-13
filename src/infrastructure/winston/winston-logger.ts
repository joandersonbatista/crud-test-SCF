import winston, { Logger } from 'winston';

import { LoggerProtocol } from '~domain-protocol/logger-protocol';

export class WinstonLogger implements LoggerProtocol {
  private static instance: WinstonLogger | null = null;

  private readonly logger: Logger;

  private constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.timestamp({
          format: () => {
            return new Date().toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'numeric',
              weekday: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hourCycle: 'h23',
            });
          },
        }),
      ),
      transports: [
        new winston.transports.File({
          filename: '.logs/error.log',
          level: 'error',
        }),
      ],
    });

    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      );
    }
  }

  public static getInstance(): WinstonLogger {
    if (this.instance === null) {
      this.instance = new WinstonLogger();
    }

    return this.instance;
  }

  public info(content: string): void {
    this.logger.info(content);
  }

  public error(content: string, error?: any): void {
    this.logger.error(content, error);
  }

  public warn(content: string): void {
    this.logger.warn(content);
  }

  public debug(content: string): void {
    this.logger.debug(content);
  }
}
