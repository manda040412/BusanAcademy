import { toast } from "vue-sonner"

// Store active toasts
const activeToasts: Record<string, any> = {}

interface ToastOptions {
	style: {
		borderColor: string
		backgroundColor: string
		color: string
		fontSize: string
	}
	class: string
	duration: number | "Infinity"
	position: "top-center" | "bottom-center" | "top-left" | "bottom-left"
}

// Show toast
export const showToast = (
	message: string,
	type: "success" | "error" | "warning" | "info" | string,
	position: "top-center" | "bottom-center" | "top-left" | "bottom-left" = "top-center",
	duration: number | "Infinity" = 3000,
	id: string | null = null
): void => {
	const toastConfig: ToastOptions = {
		style: {
			borderColor: "",
			backgroundColor: "",
			color: "",
			fontSize: "14px"
		},
		class: id || "default",
		duration: duration === "Infinity" ? Infinity : duration,
		position: position
	}

	switch (type) {
		case "success":
			toastConfig.style.backgroundColor = "#28C76F"
			toastConfig.style.borderColor = "#28C76F"
			toastConfig.style.color = "#FFFFFF"
			break
		case "error":
			toastConfig.style.backgroundColor = "#FF4C51"
			toastConfig.style.borderColor = "#FF4C51"
			toastConfig.style.color = "#FFFFFF"
			break
		case "warning":
			toastConfig.style.backgroundColor = "#FF9F43"
			toastConfig.style.borderColor = "#FF9F43"
			toastConfig.style.color = "#FFFFFF"
			break
		case "info":
			toastConfig.style.backgroundColor = "#00BAD1"
			toastConfig.style.borderColor = "#00BAD1"
			toastConfig.style.color = "#FFFFFF"
			break
		default:
			toastConfig.style.backgroundColor = "#7367F0"
			toastConfig.style.borderColor = "#7367F0"
			toastConfig.style.color = "#FFFFFF"
			break
	}

	const toastId = toast[type](message, toastConfig)
	activeToasts[id ?? "default"] = toastId
}

// Dismiss toast
export const dismissToast = (id: string): void => {
	if (Object.keys(activeToasts).length) {
		const toastElements = document.getElementsByClassName(id)

		if (toastElements.length > 0) {
			const toastElement = toastElements[0]
			toastElement.classList.add("fade-out")

			setTimeout(() => {
				;(toastElement as HTMLElement).style.display = "none"
				delete activeToasts[id]
			}, 500)
		}
	}
}

// Format currency
export const formatNumber = (value: any): string => {
	if (isNaN(value)) {
		return "0"
	}
	return new Intl.NumberFormat("en-US", {
		minimumFractionDigits: 0,
		maximumFractionDigits: 20
	}).format(value)
}

// Ordinal suffix
export const ordinalSuffix = (i: number): string => {
	const j = i % 10
	const k = i % 100
	if (j === 1 && k !== 11) return i + "st"
	if (j === 2 && k !== 12) return i + "nd"
	if (j === 3 && k !== 13) return i + "rd"
	return i + "th"
}

export function formatCompleteDateEN(value: string) {
	return new Date(value || new Date()).toLocaleDateString("en-GB", {
		weekday: "long",
		day: "2-digit",
		month: "long",
		year: "numeric"
	})
}