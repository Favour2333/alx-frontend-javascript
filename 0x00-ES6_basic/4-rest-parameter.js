export default function returnHowManyArguments() {
  const args = Array.prototype.slice.call(arguments);
  return args.length;
}
