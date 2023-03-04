import React from "react";

const useDynamicSVGImport = (name, options = {}) => {
  const ImportedIconRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  const { onCompleted, onError } = options;
  React.useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(`assets/svg/icons/stroke/stats/${name}.svg`)
        ).ReactComponent;
        if (onCompleted) {
          onCompleted(name, ImportedIconRef.current);
        }
      } catch (err) {
        if (onError) {
          onError(err);
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
};

export default useDynamicSVGImport;
