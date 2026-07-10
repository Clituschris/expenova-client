/*** library ***/
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

/*** types ***/
import type { Props } from '@app/modules/auth/authLayout/AuthLayout.type';

const useAuthLayout = ({ layoutType }: Props) => {
  const { t } = useTranslation();

  const resolvedLayoutType = layoutType ?? 'login';
  const isChoiceVisible =
    resolvedLayoutType === 'login' || resolvedLayoutType === 'signup';

  const content = useMemo(() => {
    const map: Record<
      'login' | 'signup' | 'forgotpassword',
      {
        bannerTitle: string;
        bannerSummary: string;
        formTitle: string;
        formSubtitle: string;
      }
    > = {
      login: {
        bannerTitle: t('auth.banner.title.login'),
        bannerSummary: t('auth.banner.summary.login'),
        formTitle: t('auth.title.login'),
        formSubtitle: t('auth.subtitle.login')
      },
      signup: {
        bannerTitle: t('auth.banner.title.signup'),
        bannerSummary: t('auth.banner.summary.signup'),
        formTitle: t('auth.title.signup'),
        formSubtitle: t('auth.subtitle.signup')
      },
      forgotpassword: {
        bannerTitle: t('auth.banner.title.forgotpassword'),
        bannerSummary: t('auth.banner.summary.forgotpassword'),
        formTitle: t('auth.title.forgotpassword'),
        formSubtitle: t('auth.subtitle.forgotpassword')
      }
    };

    return (
      map[resolvedLayoutType] || {
        bannerTitle: '',
        bannerSummary: '',
        formTitle: '',
        formSubtitle: ''
      }
    );
  }, [resolvedLayoutType, t]);

  return {
    ...content,
    isChoiceVisible
  };
};

export default useAuthLayout;
