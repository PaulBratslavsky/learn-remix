import { Form } from "@remix-run/react";
import Input from "~/components/Input";
export default function RecommendationForm({ transition }) {
  return (
    <Form
      className="bg-base-100 rounded-xl px-8 pt-6 pb-8 mb-4"
      method="post"
      encType="multipart/form-data"
    >
      <fieldset disabled={transition.status === "loading"}>
        {/* <h1>{transition.state}</h1> */}

        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Enter event title"
          label="Title"
          required
        />

        <div className="mb-6">
          <label
            className="block text-secondary text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            id="image"
            type="file"
            name="image"
            className="appearance-none border border-base-100 rounded w-full py-2 px-3 bg-base-200 text-primary leading-tight focus:outline-none focus:border-secondary focus:shadow focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-secondary text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="input bg-base-200 text-primary focus:outline-none focus:border-secondary w-full"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="btn btn-primary"
            type="submit"
            name="action"
            value="update"
          >
            {transition.status === "loading" ? "Submiting..." : "Submit"}
          </button>
        </div>
      </fieldset>
    </Form>
  );
}
