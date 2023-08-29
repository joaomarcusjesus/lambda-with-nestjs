export type HttpResponse<T = any> = {
    statusCode: number;
    body: T;
};
export declare const ok: <T = any>(body: T) => HttpResponse<T>;
export declare const created: <T = any>(body?: T) => HttpResponse<T>;
export declare const noContent: () => HttpResponse;
export declare const badRequest: (error: Error) => HttpResponse<Error>;
export declare const serverError: (error: unknown) => HttpResponse<Error>;
export declare const notFound: (error: Error) => HttpResponse<Error>;
export declare const appError: (error: Error) => HttpResponse<Error>;
