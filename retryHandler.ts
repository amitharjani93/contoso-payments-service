export async function retry<T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await fn();
        } catch (err) {
            if (attempt === retries) throw err;
            await new Promise(res => setTimeout(res, delay * attempt));
        }
    }
    throw new Error("Failed after retries");
}
