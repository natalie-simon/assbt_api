import { SetMetadata } from '@nestjs/common';

/**
 * Décorateur pour les routes publiques
 */
export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Controle route publique
 * @returns
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
