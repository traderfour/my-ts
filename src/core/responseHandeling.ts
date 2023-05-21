interface Response {
  readonly ok: boolean;
  text: () => Promise<string>;
  json: () => Promise<any>;
}

// handeling response from server and return json or error message
const responseHandeling = async (response: Response) => {
  if (response.ok) {
    return (await response.json()) as any;
  } else {
    const errorMessage = await response.text();
    return Promise.reject(new Error(errorMessage));
  }
};

export default responseHandeling;
