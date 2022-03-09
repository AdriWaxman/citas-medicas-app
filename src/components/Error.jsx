function Error ({error}) {

  return(
    <div className="w-96 mt-3 py-2 bg-red-600 rounded text-white">
            <p className="text-center text-bold">{error.msg}</p>
            </div>
  )
}

export default Error;