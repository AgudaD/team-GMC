import { CaretDown } from "@phosphor-icons/react"

const FaqsComponent = () => {
  return (
    <div className="font-grotesk">
      <h1 className="text-xl text-slate-900 font-bold">Frequently Asked Questions</h1>

      <div className="mt-4 space-y-4 md:text-lg font-semibold">
        <div className="flex items-center justify-between">
          <p>Do you offer free trial?</p>
          <CaretDown />
        </div>
        <div className="flex items-center justify-between">
          <p>How to get future updates?</p>
          <CaretDown />
        </div>
        <div className="flex items-center justify-between">
          <p>Does this run on all devices?</p>
          <CaretDown />
        </div>
        <div className="flex items-center justify-between">
          <p>How do you manage quality control?</p>
          <CaretDown />
        </div>
        <div className="flex items-center justify-between">
          <p>Are your virtual assistants available 24/7?</p>
          <CaretDown />
        </div>
      </div>
    </div>
  )
}

export default FaqsComponent