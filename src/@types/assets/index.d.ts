declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    ReactSVGAttributes<SVGElement>
  >;
}
