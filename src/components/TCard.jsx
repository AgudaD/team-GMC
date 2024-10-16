const TCard = ({ testimony, image, name }) => {
  return (
    <div className="mb-12">
        <div className="bg-white rounded-md shadow-xl drop-shadow-lg p-4">
            <p className="font-semibold">{testimony}</p>

            <div className="flex flex-col items-center justify-center">
                <img src={image} alt="" className="w-12 h-12 object-contain rounded-full" />
                <p className="font-medium">{name}</p>
            </div>
        </div>
    </div>
  )
}

export default TCard