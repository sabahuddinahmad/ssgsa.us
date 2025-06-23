import Link from 'next/link'
import Apply from '../components/Apply'
import Banner from '../components/Banner'
import Counter from '../components/Counter'
import Datetable from '../components/Datetable'
import Scholar from '../components/Scholar'
import UpperCarousel from '../components/UpperCarousel'
import MainLayout from '../layouts/Main'

export default function Home() {
  return (
    <MainLayout>
      <div className="mt-8">
        <Banner
          message="Applications for the cycle 2025-26 are closed."
          link=""
        />
      </div>
      <Counter countries={21} universities={110} scholars={150} />
      <UpperCarousel />
      <div className="bg-blue-850 rounded-xl text-white mx-2 my-10 p-5 sm:px-10">
        <h1 className="text-2xl font-black">What is SSGSA?</h1>
        <p className="text-lg mt-3">
          An Aligarh Muslim University (AMU) alumni initiative for mentoring and
          financially supporting meritorious AMU students for grad school
          applications.
        </p>
        <p className="text-sm mt-2">
          Read more about SSGSA{' '}
          <Link href="/about">
            <a className="text-red-500">here</a>
          </Link>
          .
        </p>
      </div>
      <div className="mx-2 mt-10 lg:flex justify-around">
        <div className="w-full lg:mr-4">
          <h1 className="text-blue-850 text-xl lg:text-2xl mx-2 mb-4 font-extrabold">
            Dates of Full Term{' '}
            <span className="font-lora font-medium">2025-2026</span>
          </h1>
          <Datetable
            bgcolor="bg-blue-850"
            textcolor="text-white"
            textbold="font-normal"
          />

          <Scholar />
        </div>
        <Apply />
      </div>
    </MainLayout>
  )
}
