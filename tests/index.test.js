import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";

describe("index.js test", () => {
  let dom;

  beforeAll(async () => {
    dom = await JSDOM.fromFile("./index.html", { runScripts: "dangerously" });
    global.document = dom.window.document;
  });

  it("should render css", async () => {
    let link = document.querySelector("link");
    expect(link.href).toMatch(/styles.css$/);
  });

    it("should render the script in html", () => {
    const document = dom.window.document;
    const script = document.querySelector("script");
    expect(script).not.toBeNull();
  });
});
