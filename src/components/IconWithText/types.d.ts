export type IconWithTextProps = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  text?: string;
  className?: string;
  containerStyle?: string;
  enableInteraction?: boolean;
  handleUserInteraction?: () => void;
};
