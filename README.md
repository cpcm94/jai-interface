# JAI Frontend Interface Challenge

## Setup

Install necessary packages by running `npm install`

## Environment Variables

There are 2 environment variables needed to run this project, in case you intend to host it on [Netlify](https://docs.netlify.com/) make sure to register them on the deploy settings of your application.

To run locally just add the variable name and its value before the build command, for example:

```
COLLECTION_NAME=your_collection_name REACT_APP_IMAGES_ENDPOINT=endpoint/for/your/images ntl dev
```

| Variable                  | Description              |
| ------------------------- | ------------------------ |
| COLLECTION_NAME           | Your JAI collection name |
| REACT_APP_IMAGES_ENDPOINT | Endpoint for your images  |

## Running locally

This project uses [netlify functions](https://www.netlify.com/products/functions/), which in turn make use of [AWS Lambda](https://aws.amazon.com/lambda/?nc1=h_ls).

As such to run locally utilize the command `ntl dev` as to [mimic a netlify production environment](https://docs.netlify.com/cli/get-started/).

## JAI

This project is designed to be an interface to interact with the [JAI API](https://getjai.com/) accessing the collection of a trained database of the image type.
