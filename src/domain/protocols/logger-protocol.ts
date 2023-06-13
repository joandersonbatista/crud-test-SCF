export interface LoggerProtocol {
  info(content: string): void;

  error(content: string, error?: any): void;

  warn(content: string): void;

  debug(content: string): void;
}
