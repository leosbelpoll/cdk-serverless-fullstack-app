exports.handler = async (event) => {
  console.log(JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `Hello!!, CDK: You've hit ${event.path}`,
  };
};
