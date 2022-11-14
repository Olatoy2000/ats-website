import { Icon } from "@iconify/react";
import { Fragment } from "react";
import { Divider } from "@mantine/core";
import { Whatsapp, Link } from "iconsax-react";
import BackEndBack from "../modals/assets/backendback.png";

function BackEnd() {
  const COHORT_COUNT = [
    {
      id: "1",
      cohortBatch: "Cohort 1.0",
      startingDate: "May 24, 2022",
      endingDate: "Dec 02, 2022",
    },
  ];

  const COHORT_APPLICATION = [
    {
      cohortBatch: "Cohort 2.0",
      startDate: "",
      endDate: "",
      applicationStartingDate: "",
      applicationEndingDate: "",
    },
  ];
  return (
    <Fragment>
      <article
        className="flex flex-col items-center gap-6"
        style={{
          backgroundImage: `url(${BackEndBack.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <section className="flex flex-col items-center gap-1">
          <h1 className="font-extrabold text-[clamp(1rem,4vw,4.5rem)] leading-[4.75rem] text-semiBold-gostWhite">
            BackEnd Development
          </h1>
          <div className="flex items-center gap-1">
            <Icon icon="ci:dot-02-s" color="#00ff38" width="35" height="35" />
            <p className="text-[1.125rem] leading-6 text-bold-malachite">
              Open for Application
            </p>
          </div>
        </section>
        <section className="flex flex-col mb-8 items-center justify-center gap-4">
          <div className="flex gap-6">
            <button className="border-white text-white hover:bg-[#C81107] border rounded-md p-3">
              Refer a friend
            </button>
            <a href="#app">
              <button
                className="p-3 text-white rounded-md"
                style={{
                  background:
                    "linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
                }}
              >
                Apply now
              </button>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Icon
              icon="material-symbols:share"
              color="white"
              width="32"
              height="32"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path
                fill="#FFF"
                d="M22 16.19c0 3.64-2.17 5.81-5.81 5.81H15c-.55 0-1-.45-1-1v-5.77c0-.27.22-.5.49-.5l1.76-.03c.14-.01.26-.11.29-.25l.35-1.91a.303.303 0 00-.3-.35l-2.13.03c-.28 0-.5-.22-.51-.49l-.04-2.45c0-.16.13-.3.3-.3l2.4-.04c.17 0 .3-.13.3-.3l-.04-2.4c0-.17-.13-.3-.3-.3l-2.7.04a2.996 2.996 0 00-2.95 3.05l.05 2.75c.01.28-.21.5-.49.51l-1.2.02c-.17 0-.3.13-.3.3l.03 1.9c0 .17.13.3.3.3l1.2-.02c.28 0 .5.22.51.49l.09 5.7c.01.56-.44 1.02-1 1.02h-2.3C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81v8.38z"
              ></path>
            </svg>
            <Whatsapp size="32" color="#ffffff" variant="Bold" />
            <Icon
              icon="carbon:logo-instagram"
              color="white"
              width="32"
              height="32"
            />
            <Icon
              icon="icon-park-solid:instagram-one"
              color="white"
              width="32"
              height="32"
            />

            <Icon
              icon="bytesize:twitter"
              color="white"
              width="32"
              height="32"
            />
            <Link size="32" color="#ffffff" variant="Bold" />
          </div>
        </section>
      </article>
      <article className="flex flex-col gap-6 p-10">
        <h3 className="text-light-quickSilver uppercase">course detail</h3>
        <Divider />
        <p className="text-justify">
          References in these Terms of Service ("Terms") to "AFEX", "Exchange,"
          "Company," "we," "our" or "us," are to AFEX Commodities Exchange
          Limited depending on the context, and references to you or your are to
          the persons with whom the Exchange enters into these Terms. Please
          read these Terms and Conditions carefully. You are not permitted to
          link any other website to the Platform without obtaining the express
          prior written consent of the Exchange. Access to the Platform is at
          your own risk. The Exchange does not represent or warrant that the use
          of the Platform or any material downloaded from it will not cause
          damage to property, including but not limited to loss of data or
          computer virus infection. The Exchange shall not be responsible for
          any loss, omission or damage that may arise in connection with your
          use of the Platform due to IT or network downtime. The responsibility
          for the security of your password associated with the Platform shall
          solely be yours at all times. The Exchange will make all reasonable
          attempts to ensure that the Platform is fully operational at all
          times. However, the Exchange makes no guarantees as to fitness for
          purpose of the Platform.
        </p>
        <h3 className="text-light-quickSilver uppercase">active cohort</h3>
        <Divider />
        <div>
          {COHORT_COUNT.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4 justify-start mb-6">
              <h5 className="font-bold">
                Cohort: <span className="font-light">{item.cohortBatch}</span>
              </h5>
              <h5 className="font-bold">
                Starting Date:{" "}
                <span className="font-light">{item.startingDate}</span>
              </h5>
              <h5 className="font-bold">
                Ending Date:
                <span className="font-normal">{item.endingDate}</span>
              </h5>
            </div>
          ))}
        </div>

        <h3 className="uppercase text-light-darkSilver">open application</h3>
        <Divider />
        <div>
          {COHORT_APPLICATION.map((el, idx) => (
            <div key={idx} className="flex flex-col gap-4 justify-start mb-6">
              <h5>
                Cohort: <span>{el.cohortBatch}</span>
              </h5>
              <h5>
                Starting Date: <span>{el.startDate}</span>
              </h5>
              <h5>
                Ending Date: <span>{el.endDate}</span>
              </h5>
              <h5>
                Application Starting Date:
                <span className="text-light-malachite">
                  {el.applicationStartingDate}
                </span>
              </h5>
              <h5>
                Application Ending Date: <span>{el.applicationEndingDate}</span>
              </h5>
            </div>
          ))}
        </div>
        <div>
          <h4 className="uppercase font-bold">Requirement</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rem
            veritatis asperiores non corporis consequatur dolorem aliquam modi,
            tempora quidem deleniti. Voluptates, dolorum. Amet neque voluptas in
            cumque inventore tempora! Accusamus culpa necessitatibus ea.
            Temporibus, tempora voluptates odio, similique perspiciatis iure est
            aut sapiente eum placeat iusto adipisci distinctio velit. Eius
            beatae blanditiis sequi suscipit dolores, ullam voluptates expedita
            accusantium. Molestiae vero ab tempora voluptatem corporis!
            Accusantium quos libero minus atque eum repellat quas consequatur
            itaque iusto animi sit, facilis, voluptatibus voluptate dolores
            asperiores temporibus dignissimos quae magnam obcaecati at! Dolores
            quasi error fugit nulla vero voluptas distinctio vel libero enim
            debitis, fugiat, nesciunt modi ex dolorum amet porro ea molestiae
            ipsa nisi laboriosam nihil praesentium? Nam esse in asperiores? Ipsa
            repellendus quod, excepturi asperiores quibusdam minima modi vitae
            atque, necessitatibus numquam possimus corrupti voluptatum molestiae
            laboriosam voluptas sunt ea qui facilis natus earum architecto
            laborum, porro provident dolore. Labore. Ex, laudantium ea maxime
            tempore vero fuga facere voluptate velit! Illum omnis obcaecati
            deserunt quod mollitia, sit illo officiis labore odio quidem
            voluptas. Tempora voluptatibus animi nihil porro beatae corporis.
            Architecto, ab distinctio cum provident exercitationem eaque esse
            tempore qui, minima perferendis itaque incidunt, accusantium unde
            necessitatibus autem deleniti ipsum atque sequi repellat voluptas
            expedita molestiae dolore! Facere, quia provident. Libero possimus
            neque laboriosam itaque aut pariatur consectetur ab praesentium
            blanditiis, consequatur at sint quia magnam nisi, quaerat eaque ex
            earum, delectus voluptatum repellat commodi rem impedit. Rem, facere
            animi! Fugiat fuga quaerat, mollitia molestias, veniam ipsam
            exercitationem id illum, deserunt ducimus perferendis quos neque at?
            Voluptatum delectus voluptatem, rerum optio excepturi itaque,
            commodi esse nobis rem, aliquid cupiditate eveniet. Sequi, voluptate
            quibusdam nostrum minima animi ullam dignissimos voluptatum eius
            ipsam, labore quam expedita cumque aliquam nobis consequuntur ad
            ipsa modi aliquid. Officiis aperiam distinctio explicabo ex nihil
            voluptates dicta?
          </p>
        </div>
        <div>
          <h4 className="uppercase font-bold">how to apply</h4>
          <p>
            Click "Apply now" Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quisquam, culpa non sunt, nisi quos ipsum totam
            magnam excepturi voluptate voluptatem nesciunt distinctio
            praesentium explicabo sit animi eum, autem rem velit. Dignissimos,
            aliquid. Provident aspernatur distinctio modi autem, necessitatibus
            repellat in ullam, deserunt exercitationem dolores est delectus.
            Enim in nam hic, dolorum fugiat, perspiciatis distinctio eaque ea
            sunt molestiae iure quam.
          </p>
        </div>
        <button
          id="app"
          className="self-center bg-light-internationalOrange w-full rounded-md text-white px-16 py-3"
        >
          Apply now
        </button>
      </article>
    </Fragment>
  );
}
export default BackEnd;
