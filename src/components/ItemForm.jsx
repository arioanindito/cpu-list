import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function TodoForm({ todo, onSubmit, disabled, cursor }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			brand: todo ? todo.brand : "",
			model: todo ? todo.model : "",
			socket: todo ? todo.socket : "",
			clockspeed: todo ? todo.clockspeed : "",
			core: todo ? todo.core : "",
			threads: todo ? todo.threads : "",
			tdp: todo ? todo.tdp : "",
			price: todo ? todo.price : "",
		},
	});
	const navigate = useNavigate();

	const submitHandler = (d) => {
		onSubmit(d);
		navigate("/");
	};

	const styleInput =
		"flex items-center justify-center border-zinc-800 border-2 p-2 w-44 ";

	const stlyeLabel = "flex items-center justify-start gap-2";

	return (
		<form
			className="flex flex-col gap-2"
			onSubmit={handleSubmit(submitHandler)}
		>
			<label className={stlyeLabel}>
				<input
					id="brand"
					type="text"
					className={styleInput}
					{...register("brand", { required: true, maxLength: 10 })}
					placeholder="CPU Brand"
				/>
				{errors.brand && errors.brand.type === "required" && (
					<span className="text-red-600">This is required!</span>
				)}
				{errors.brand && errors.brand.type === "maxLength" && (
					<span className="text-red-600">
						Max length exceeded (10 characters)
					</span>
				)}
			</label>

			<label className={stlyeLabel}>
				<input
					id="model"
					type="text"
					className={styleInput}
					{...register("model", { required: true, maxLength: 15 })}
					placeholder="Model"
				/>
				{errors.model && errors.model.type === "required" && (
					<span className="text-red-600">This is required!</span>
				)}
				{errors.model && errors.model.type === "maxLength" && (
					<span className="text-red-600">
						Max length exceeded (15 characters)
					</span>
				)}
			</label>

			<label className={stlyeLabel}>
				<select
					id="socket"
					disabled={disabled}
					className={styleInput + ` ${cursor}`}
					{...register("socket", { required: true })}
				>
					<option value="">CPU Socket...</option>
					<option value="LGA">LGA</option>
					<option value="PGA">PGA</option>
					<option value="ZIF">ZIF</option>
					<option value="BGA">BGA</option>
					<option value="AMD">AMD</option>
				</select>
				{errors.socket && errors.socket.type === "required" && (
					<span className="text-red-600">This is required!</span>
				)}
			</label>

			<label className={stlyeLabel}>
				<input
					id="clockspeed"
					type="number"
					min="1"
					step="any"
					className={styleInput}
					{...register("clockspeed", { required: true })}
					placeholder="Clockspeed"
				/>
				GHz
				{errors.clockspeed && errors.clockspeed.type === "required" && (
					<span className="text-red-600">This is required!</span>
				)}
			</label>

			<label className={stlyeLabel}>
				<input
					id="core"
					type="number"
					min="1"
					className={styleInput}
					{...register("core", { required: true })}
					placeholder="Number of core"
				/>
				Core
				{errors.core && errors.core.type === "required" && (
					<span className="text-red-600">This is required!</span>
				)}
			</label>

			<label className={stlyeLabel}>
				<input
					id="threads"
					type="number"
					min="1"
					className={styleInput}
					{...register("threads", { required: true })}
					placeholder="Number of threads"
				/>
				Threads
				{errors.threads && errors.threads.type === "required" && (
					<span className="text-red-600">This is required!</span>
				)}
			</label>

			<label className={stlyeLabel}>
				<input
					id="tdp"
					type="number"
					min="1"
					className={styleInput}
					{...register("tdp", { required: true })}
					placeholder="TDP"
				/>
				Watts
				{errors.tdp && errors.tdp.type === "required" && (
					<span className="text-red-600">This is required!</span>
				)}
			</label>

			<label className={stlyeLabel}>
				<input
					id="price"
					type="number"
					min="1"
					step="any"
					className={styleInput}
					{...register("price", { required: true })}
					placeholder="Price(Euro)"
				/>
				Euro
				{errors.price && errors.price.type === "required" && (
					<span className="text-red-600">This is required!</span>
				)}
			</label>

			<input
				className={
					styleInput +
					" w-20 bg-blue-400 hover:bg-blue-600 text-sky-50 border-none mt-4 cursor-pointer"
				}
				type="submit"
			/>
		</form>
	);
}
