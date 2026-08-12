function Title(props) {
  return (
    <h1 className="w-[500px] text-3xl text-slate-100 font-bold text-center">
      {props.children}
    </h1>
  );
}
export default Title;
