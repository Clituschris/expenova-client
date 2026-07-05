/*** library **/
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

/*** types **/
import type { Props } from '@app/modules/auth/authLayout/AuthLayout.type';

const useAuthLayout = (props: Props) => {
  const { layoutType } = props;
  const { t } = useTranslation();

  const [state, setState] = useState({
    bannerTitle: '',
    bannerSummary: '',
    formTitle: '',
    formSubtitle: ''
  });

  const isChoiceVisible = useMemo(
    () => layoutType === 'login' || layoutType === 'signup',
    [layoutType]
  );

  const renderContents = () => {
    switch (layoutType) {
      case 'login':
        setState({
          bannerTitle: t('auth.banner.title.login'),
          bannerSummary: t('auth.banner.summary.login'),
          formTitle: t('auth.title.login'),
          formSubtitle: t('auth.subtitle.login')
        });
        break;
      case 'signup':
        setState({
          bannerTitle: t('auth.banner.title.signup'),
          bannerSummary: t('auth.banner.summary.signup'),
          formTitle: t('auth.title.signup'),
          formSubtitle: t('auth.subtitle.signup')
        });
        break;
      case 'forgotpassword':
        setState({
          bannerTitle: t('auth.banner.title.forgotpassword'),
          bannerSummary: t('auth.banner.summary.forgotpassword'),
          formTitle: t('auth.title.forgotpassword'),
          formSubtitle: t('auth.subtitle.forgotpassword')
        });
        break;
    }
  };

  useEffect(() => {
    renderContents();
  }, [layoutType]);

  return { ...state, isChoiceVisible };
};

export default useAuthLayout;
