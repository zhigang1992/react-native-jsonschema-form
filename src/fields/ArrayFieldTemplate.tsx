import React from 'react';
import { ArrayFieldTemplateProps, IdSchema, utils } from '@rjsf/core';
import { Image, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DescriptionField from './DescriptionField';
import { useFormContext } from '../FormContext';
import TitleField from './TitleField';
import reorderUp from '../../assets/ReorderUp@3x.png';
import reorderDown from '../../assets/ReorderDown@3x.png';
import arrayDelete from '../../assets/arrayDelete@3x.png';

const { isMultiSelect, getDefaultRegistry } = utils;

const ArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  const { schema, registry = getDefaultRegistry() } = props;

  if (isMultiSelect(schema, registry.definitions)) {
    return <DefaultFixedArrayFieldTemplate { ...props } />;
  } else {
    return <DefaultNormalArrayFieldTemplate { ...props } />;
  }
};

type ArrayFieldTitleProps = {
  TitleField: any;
  idSchema: IdSchema;
  title: string;
  required: boolean;
};

const ArrayFieldTitle = ({ title, required }: ArrayFieldTitleProps) => {
  if (!title) {
    return null;
  }
  return <TitleField title={ title } required={ required }/>;
};

type ArrayFieldDescriptionProps = {
  DescriptionField: any;
  idSchema: IdSchema;
  description: string;
};

const ArrayFieldDescription = ({ description }: ArrayFieldDescriptionProps) => {
  if (!description) {
    return null;
  }

  return <DescriptionField description={ description }/>;
};

// Used in the two templates
const DefaultArrayItem = (props: any) => {
  return (
    <View style={ styles.arrayItem } key={ props.index }>
      <View style={ styles.card }>{ props.children }</View>
      <View style={ styles.actionRow }>
        {
          props.hasMoveUp && (
            <TouchableOpacity
              style={ styles.actionButton }
              onPress={ () => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                props.onReorderClick(props.index, props.index - 1)();
              } }
            >
              <Image style={ styles.image } source={ { uri: reorderUp } }/>
            </TouchableOpacity>
          )
        }
        {
          props.hasMoveDown && (
            <TouchableOpacity
              style={ styles.actionButton }
              onPress={ () => {
                props.onReorderClick(props.index, props.index + 1)();
              } }
            >
              <Image style={ styles.image } source={ { uri: reorderDown } }/>
            </TouchableOpacity>
          )
        }
        {
          props.hasRemove && (
            <TouchableOpacity
              disabled={ props.disabled || props.readonly }
              style={ styles.actionButton }
              onPress={ () => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                props.onDropIndexClick(props.index)();
              } }
            >
              <Image style={ styles.image } source={ { uri: arrayDelete } }/>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  );
};

const AddButton = (props: {
  onPress: (event: any) => void;
  disabled?: boolean;
}) => {
  const context = useFormContext();
  return (
    <TouchableOpacity
      style={ [ styles.addButton, {
        backgroundColor: context.theme.primaryColor,
      } ] }
      onPress={ e => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        props.onPress(e);
      } }
      disabled={ props.disabled }
    >
      <Text style={ styles.addButtonText }>{ context.arrayAddTitle }</Text>
    </TouchableOpacity>
  );
};

const DefaultFixedArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <View style={ styles.container }>
      <ArrayFieldTitle
        key={ `array-field-title-${ props.idSchema.$id }` }
        TitleField={ props.TitleField }
        idSchema={ props.idSchema }
        title={ props.uiSchema[ 'ui:title' ] || props.title }
        required={ props.required }
      />

      { (props.uiSchema[ 'ui:description' ] || props.schema.description) && (
        <DescriptionField
          description={
            props.uiSchema[ 'ui:description' ] || props.schema.description
          }
        />
      ) }

      <View style={ styles.content }>
        { props.items && props.items.map(DefaultArrayItem) }
      </View>

      { props.canAdd && (
        <AddButton
          disabled={ props.disabled || props.readonly }
          onPress={ props.onAddClick }
        />
      ) }
    </View>
  );
};

const DefaultNormalArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <View style={ styles.container }>
      <ArrayFieldTitle
        key={ `array-field-title-${ props.idSchema.$id }` }
        TitleField={ props.TitleField }
        idSchema={ props.idSchema }
        title={ props.uiSchema[ 'ui:title' ] || props.title }
        required={ props.required }
      />

      { (props.uiSchema[ 'ui:description' ] || props.schema.description) && (
        <ArrayFieldDescription
          key={ `array-field-description-${ props.idSchema.$id }` }
          DescriptionField={ props.DescriptionField }
          idSchema={ props.idSchema }
          description={
            props.uiSchema[ 'ui:description' ] || props.schema.description
          }
        />
      ) }

      <View style={ styles.content }>
        { props.items && props.items.map(p => DefaultArrayItem(p)) }
      </View>

      { props.canAdd && (
        <AddButton
          disabled={ props.disabled || props.readonly }
          onPress={ props.onAddClick }
        />
      ) }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  content: {
    marginTop: 10,
  },
  arrayItem: {
    marginBottom: 10,
  },
  card: {
    paddingBottom: 20,
    borderRadius: 5,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  actionButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    marginTop: 20,
    height: 44,
    backgroundColor: '#0057FF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default ArrayFieldTemplate;
