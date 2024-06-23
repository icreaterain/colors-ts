import { MouseEventHandler } from 'react';
import ColorChangeSwatch from '../shared/color-change-swatch';
import { HexColour } from '../../color-reducer';

type RelatedColorPaletteProps = {
  title: string;
  hexColors: string[];
  onClick?: (hexColor: HexColour) => void;
};

const RelatedColorPalette = ({
  title,
  hexColors,
}: RelatedColorPaletteProps) => {
  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          return (
            <ColorChangeSwatch
              key={hexColor}
              hexColor={hexColor}
              className="w-full h-full"
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedColorPalette;
