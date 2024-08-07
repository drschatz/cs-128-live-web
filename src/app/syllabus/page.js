import Markdown from "markdown-to-jsx";
import getPostContent from "@/lib/getPostContent";

const CourseBook = () => {
  const slug = "syllabus";
  const post = getPostContent(slug);

  return (
    <main>
      <div className="mb-8 text-center relative w-full h-[24vh] bg-green-600 ">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            Syllabus
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-green/60 dark:bg-dark/40" />
      </div>
      <div className="flex mb-8 sm:flex-row flex-col">
        <div className="w-full sm:w-4/12 sm:block mt-8 ml-24 text-base text-gray">
          <h3 className="mb-2 sticky top-24 font-bold">Syllabus</h3>
          <ul className="ml-4 sticky top-32">
            <li className="hover:text-accent mb-1.5">
              <a href="#contact-information" className="ml-2">
                <strong>Contact Information</strong>
              </a>
            </li>
            <li className="hover:text-accent mb-1.5">
              <a href="#learning-objectives" className="ml-2">
                <strong>Learning Objectives</strong>
              </a>
            </li>
            <li className="hover:text-accent mb-1.5">
              <a href="#components" className="ml-2">
                <strong>Components</strong>
              </a>
            </li>

            <ul className="ml-4 text-sm">
              <li className="hover:text-accent mb-1">
                <a href="#lecture" className="ml-2">
                  <strong>Lecture</strong>
                </a>
              </li>
              <li className="hover:text-accent mb-1">
                <a href="#lab" className="ml-2">
                  <strong>Lab</strong>
                </a>
              </li>
              <li className="hover:text-accent mb-1">
                <a href="#homework" className="ml-2">
                  <strong>Homework</strong>
                </a>
              </li>
              <li className="hover:text-accent mb-1">
                <a href="#mps" className="ml-2">
                  <strong>MPs</strong>
                </a>
              </li>
              <li className="hover:text-accent mb-1">
                <a href="#exams" className="ml-2">
                  <strong>Exams</strong>
                </a>
              </li>
            </ul>

            <li className="hover:text-accent mb-1.5">
              <a href="#grades" className="ml-2">
                <strong>Grades</strong>
              </a>
            </li>
            <ul className="ml-4 text-sm">
            <li className="hover:text-accent mb-1">
              <a href="#grades" className="ml-2">
                <strong>Grade Distribution</strong>
              </a>
            </li>
            <li className="hover:text-accent mb-1">
              <a href="#how-to-get-points" className="ml-2">
                <strong>How To Get Points</strong>
              </a>
            </li>

            </ul>
            <li className="hover:text-accent mb-1.5">
              <a href="#extension-policies" className="ml-2">
                <strong>Extension Policies</strong>
              </a>
            </li>
            <li className="hover:text-accent mb-1.5">
              <a href="#how-to-get-help" className="ml-2">
                <strong>How to Get Help</strong>
              </a>
            </li>
            <ul className="ml-4 text-sm">
              <li className="hover:text-accent mb-1">
                <a href="#office-hours" className="ml-2">
                  <strong>Office Hours</strong>
                </a>
              </li>
              <li className="hover:text-accent mb-1">
                <a href="#discuss-online-forum" className="ml-2">
                  <strong>Discuss Online Forum</strong>
                </a>
              </li>
              <li className="hover:text-accent mb-1">
                <a href="#meet-with-the-professor" className="ml-2">
                  <strong>Meet with the Professor</strong>
                </a>
              </li>
            </ul>
            <li className="hover:text-accent mb-1.5">
              <a href="#proffice-hours-professor-office-hours" className="ml-2">
                <strong>Proffice Hours (Professor Office Hours)</strong>
              </a>
            </li>
            <li className="hover:text-accent mb-1.5">
              <a
                href="#collaborationacademic-integrity-policy"
                className="ml-2"
              >
                <strong>Collaboration/Academic Integrity Policy</strong>
              </a>
            </li>
            <ul className="ml-4 text-sm">
              <li className="hover:text-accent mb-1">
                <a href="#limited-collaboration-allowed" className="ml-2">
                  <strong>Limited Collaboration Allowed</strong>
                </a>
              </li>
              <li className="hover:text-accent mb-1">
                <a href="#collaboration-not-allowed" className="ml-2">
                  <strong>Collaboration NOT Allowed</strong>
                </a>
              </li>
            </ul>
            <li className="hover:text-accent mb-1.5">
              <a
                href="#commitment-to-diversity-equity-and-inclusion"
                className="ml-2"
              >
                <strong>Commitment to Diversity, Equity, and Inclusion</strong>
              </a>
            </li>
            <li className="hover:text-accent mb-1.5">
              <a href="#students-with-disabilities" className="ml-2">
                <strong>Students with Disabilities</strong>
              </a>
            </li>
            <li className="hover:text-accent mb-1.5">
              <a href="#statement-on-mental-health" className="ml-2">
                <strong>Statement on Mental Health</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-7/12 mt-8 p-4">
          <div className="mb-8 ">
            <h1 className="text-3xl font-bold mb-4 text-accent">
              Course Syllabus
            </h1>
            <Markdown
              options={{
                overrides: {
                  h1: {
                    component: "h1",
                    props: {
                      className: "text-2xl font-semibold mt-8 mb-2",
                    },
                  },
                  h2: {
                    component: "h2",
                    props: {
                      className: "text-xl font-semibold mt-6 mb-2",
                    },
                  },
                  h3: {
                    component: "h3",
                    props: {
                      className: "text-lg font-semibold mt-4 mb-2",
                    },
                  },
                  h4: {
                    component: "h4",
                    props: {
                      className: "text-base font-semibold mt-4 mb-2",
                    },
                  },
                  p: {
                    component: "p",
                    props: {
                      className:
                        "mb-4 leading-9 text-black/80 font-medium text-lg ",
                    },
                  },
                  a: {
                    component: "a",
                    props: {
                      className: "text-accent hover:underline",
                    },
                  },
                  ul: {
                    component: "ul",
                    props: {
                      className: "list-disc ml-8 mb-4",
                    },
                  },
                  ol: {
                    component: "ol",
                    props: {
                      className:
                        "list-decimal tracking-normal ml-8 mb-2 text-lg",
                    },
                  },
                  li: {
                    component: "li",
                    props: {
                      className: "mb-2 ml-4 tracking-normal text-lg",
                    },
                  },
                  blockquote: {
                    component: "blockquote",
                    props: {
                      className:
                        "border-l-4 border-accent bg-gray-100 dark:bg-gray-800 p-2",
                    },
                  },
                  code: {
                    component: "code",
                    props: {
                      className:
                        "bg-gray-100 dark:bg-gray-800 p-1 text-sm rounded",
                    },
                  },
                  pre: {
                    component: "pre",
                    props: {
                      className:
                        "bg-gray-100 dark:bg-gray-800 p-2 text-sm rounded",
                    },
                  },
                  strong: {
                    component: "strong",
                    props: {
                      className: "font-semibold text-black",
                    },
                  },
                  em: {
                    component: "em",
                    props: {
                      className: "italic",
                    },
                  },
                  table: {
                    component: "table",
                    props: {
                      className: "table-auto w-full",
                    },
                  },
                  thead: {
                    component: "thead",
                    props: {
                      className: "bg-gray-100 dark:bg-gray-800",
                    },
                  },
                  th: {
                    component: "th",
                    props: {
                      className: "border dark:border-light p-2",
                    },
                  },
                  td: {
                    component: "td",
                    props: {
                      className: "border dark:border-light p-2",
                    },
                  },
                  tbody: {
                    component: "tbody",
                    props: {
                      className: "text-center",
                    },
                  },
                  tr: {
                    component: "tr",
                    props: {
                      className: "bg-gray-100 dark:bg-gray-800",
                    },
                  },
                  img: {
                    component: "img",
                    props: {
                      className: "w-full",
                    },
                  },
                },
              }}
            >
              {post.content}
            </Markdown>
          </div>
        </div>
        <div className="hidden sm:block w-1/12"></div>
      </div>
    </main>
  );
};

export default CourseBook;
