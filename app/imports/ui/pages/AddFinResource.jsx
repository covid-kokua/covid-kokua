import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Resources } from '../../api/resource/Resources';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: { type: String, required: true },
  website: String,
  phoneNumber: String,
  image: String,
  description: { type: String, required: true },
}, { requiredByDefault: false });

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddFinResource extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, website, phoneNumber, image, description } = data;
    const type = 'financial';
    Resources.collection.insert({ name, website, phoneNumber, image, description, type },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <div className='financial'>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center">Add Resource</Header>
              <AutoForm ref={ref => {
                fRef = ref;
              }} schema={bridge} onSubmit={data => this.submit(data, fRef)}>
                <Segment>
                  <TextField id='name' name='name'/>
                  <TextField id='website' name='website'/>
                  <TextField id='phone' name='phoneNumber'/>
                  <TextField id='image' name='image'/>
                  <LongTextField id='description' name='description'/>
                  <SubmitField id='submit' value='Submit'/>
                  <ErrorsField/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default AddFinResource;
