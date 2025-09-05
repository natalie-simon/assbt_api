#!/bin/bash
echo "Corrigion des importations du client Prisma..."

# Remplacer les importations problématiques
find ./src -type f -name "*.ts" -exec sed -i 's/import { Membre } from "@prisma\/client";/import { Membre } from "..\/generated\/prisma";/g' {} \;
find ./src -type f -name "*.ts" -exec sed -i "s/import { Membre } from '@prisma\/client';/import { Membre } from '..\/generated\/prisma';/g" {} \;

find ./src -type f -name "*.ts" -exec sed -i 's/import { Profil } from "@prisma\/client";/import { Profil } from "..\/generated\/prisma";/g' {} \;
find ./src -type f -name "*.ts" -exec sed -i "s/import { Profil } from '@prisma\/client';/import { Profil } from '..\/generated\/prisma';/g" {} \;

echo "Importations corrigées"