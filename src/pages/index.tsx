import { MdAttachMoney } from 'react-icons/md';
import { VscOrganization } from 'react-icons/vsc';
import { RiHandHeartLine } from 'react-icons/ri';
import { IoSchoolOutline } from 'react-icons/io5';
import { BiFoodMenu } from 'react-icons/bi';
import { GiBrickWall } from 'react-icons/gi';

import Layout from '@/components/layout';
import Project from '@/components/project';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-xl mx-auto p-6">
        <div className="flex flex-col justify-center items-center h-52 w-full">
          <span className="font-bold text-4xl text-gray-50 mb-2">
            Hello, I'm Arthur
          </span>
          <p className="text-xl text-center text-gray-50">
            I'm a computer science major attending the University of Central
            Florida
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <span className="font-bold text-2xl text-gray-50 p-3">Projects</span>
          <div className="flex flex-wrap justify-center items-center">
            <Project
              title="slicesum"
              summary="Budgeting for everyone."
              icon={<MdAttachMoney size={25} />}
              link="https://slicesum.com/"
            />
            <Project
              title="thetatau"
              summary="Rho Gamma website."
              icon={<VscOrganization size={25} />}
              link="https://thetataupg.org/"
            />
            <Project
              title="FoodBook"
              summary="Recipe manager."
              icon={<BiFoodMenu size={25} />}
              link="https://github.com/ArthurWHenry/foodbook-mobile"
            />
            <Project
              title="localhand"
              summary="Assist small businesses."
              icon={<RiHandHeartLine size={25} />}
              link="https://github.com/ArthurWHenry/localhand"
            />
            <Project
              title="TutorCloud"
              summary="Mock tutoring business."
              icon={<IoSchoolOutline size={25} />}
              link="https://github.com/ArthurWHenry/tutoring_service"
            />
            <Project
              title="Lego305"
              summary="Scaled model of MDC."
              icon={<GiBrickWall size={25} />}
              link="https://www.youtube.com/watch?v=b8VYoZhTU6c"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
