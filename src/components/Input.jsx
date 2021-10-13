export function Input(props) {
  return (
    <div>
      <label
        htmlFor={props.name}
        class="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div class="mt-1">
        <input
          {...props}
          type="text"
          name={props.name}
          id={props.name}
          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}
