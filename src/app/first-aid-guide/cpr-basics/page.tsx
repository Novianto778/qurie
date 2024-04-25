import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <main className="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white antialiased">
        <div className="px-4 mx-auto max-w-screen-xl">
          {/* back button */}
          <div className="mb-8 max-w-2xl mx-auto">
            <Link
              href="/first-aid-guide"
              className="flex items-center text-gray-500 hover:text-gray-900"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back
            </Link>
          </div>
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900"
                    >
                      Jese Leos
                    </a>
                    <p className="text-base text-gray-500">
                      Cardiopulmonary Resuscitation Specialist
                    </p>
                    <p className="text-base text-gray-500">
                      <time dateTime="2024-02-08" title="February 8th, 2024">
                        February 8th, 2024
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                CPR Made Simple: 10 Critical Steps for Emergency Response
              </h1>
            </header>
            <div className="prose">
              <p className="lead">
                Cardiopulmonary resuscitation (CPR) is an emergency procedure
                consisting of chest compressions, often combined with artificial
                ventilation, to manually preserve intact brain function until
                further measures are taken to restore spontaneous blood
                circulation to the vital organs and to breathe in a person who
                is in cardiac arrest.
              </p>
              <p className="lead">
                CPR oxygenates the body and brain and is thus favorable in
                making a later defibrillation advanced life support possible. On
                the other hand, delaying CPR often results in poor outcomes.
              </p>
              <figure className="mt-2">
                <img
                  src="https://assets-global.website-files.com/635940de6d286505c38236fe/63aaf9dfe473f33938aaedee_10-steps-to-perform-cpr_uscpronline-infographics.webp"
                  alt=""
                  className="w-full bg-cover object-cover rounded"
                />
              </figure>
            </div>
            <h4 className="mt-8 text-2xl font-bold text-gray-900">
              Conclusion
            </h4>
            <p className="mt-4">
              CPR, or cardiopulmonary resuscitation, is an emergency procedure
              used to preserve brain function in cardiac arrest patients until
              further measures can be taken. It can significantly improve
              someone'schances of survival if they suffer a heart attack or stop
              breathing following an accident or trauma.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Blog;
