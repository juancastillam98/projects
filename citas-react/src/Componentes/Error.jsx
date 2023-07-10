export const Error = ({children}) => {//Extraigo el mensaje de error del prop
	return (
		<>
			<div className="bg-red-400 text-center p-3 rounded-md mb-2">
				<p className="text-red-800 uppercase font-bold">{children}</p>
			</div>
		</>
	)
}