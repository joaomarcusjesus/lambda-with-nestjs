export declare class AppController {
    hello(): Promise<{
        statusCode: number;
        body: {
            message: string;
        };
    }>;
}
